const graphql = require("graphql");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList } = graphql;
const User = mongoose.model("users");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
    playlists: {
      type: new GraphQLList(require("./playlist_type")),
      resolve(parentValue) {
        return User.findPlaylists(parentValue.id);
      }
    },
    likedSongs: {
      type: new GraphQLList(require("./song_type")),
      resolve(parentValue) {
        return User.findById(parentValue._id)
          .populate("likedSongs")
          .then(user => user.likedSongs)
      }
    }
  })
});

module.exports = UserType;
