const { default: mongoose } = require("mongoose");
const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../index");
const connectDataBase = require("../../database");
const Tuit = require("../../database/models/Tweet");

let mongoServer;
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoURI = mongoServer.getUri();
  await connectDataBase(mongoURI);
});

beforeEach(async () => {
  await Tuit.create({ text: "wololoo", likes: 999 });
  await Tuit.create({ text: "Longer text just in case", likes: 999 });
  await Tuit.create({
    text: "Testear es una fiesta, Laura casi se muere haciendo el challenge",
    likes: 999,
  });
});

afterEach(async () => {
  await Tuit.deleteMany({});
});

afterAll(async () => {
  mongoose.connection.close();
  mongoServer.stop();
});

describe("Given the entire app", () => {
  describe("When it receives a get request at '/tweets'", () => {
    test("Then it should return a list with all the tweets", async () => {
      const expectedLength = 3;
      const { body } = await request(app).get("/tweets").expect(200);

      expect(body.tweets).toHaveLength(expectedLength);
    });
  });

  describe("When it receives a post request at '/tweets' with an invalid tweet", () => {
    test("Then it should return a 500 and message 'Bad request, tweet not created'", async () => {
      const expectedMessage = "Bad request, tweet not created";
      const postedTweet = {
        text: "dlkjaldskjfbaldkjbalsdkjbcalksdjbcalsdkbasldkvjbaldskvbaldjfhbv alkdjfnvñadsjfasjdfñalksdfñalkdsnfñladnfñlsdnfañsdnfalsdnfañsdlkfasdlfñasdifpaodsinfnapsdjnfasdnfapdsoifna`dsovinfnañlkvnñzcxlkvnadinva`diovnaòdinvñadkvnañdfnañdi",
      };

      const { body } = await request(app)
        .post("/tweets")
        .set("Content-Type", "application/json")
        .send(postedTweet)
        .expect(400);

      expect(body.message).toBe(expectedMessage);
    });
  });
});
