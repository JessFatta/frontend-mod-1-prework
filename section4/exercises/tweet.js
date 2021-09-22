/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

incrementNumberOfLikes(){
  this.numberOfLikes ++;
}
addComment(comment){
  this.comments.push(comment)
  return this.comments
}
};

var updatedTweet = new Tweet("Jess", "Back from vacation", "10pm", 50, ["great trip!"]);
console.log(updatedTweet);

updatedTweet.incrementNumberOfLikes();
console.log(updatedTweet);

updatedTweet.addComment("me too");
console.log(updatedTweet);

updatedTweet.incrementNumberOfLikes();
console.log(updatedTweet);

updatedTweet.addComment("happy to be home");
console.log(updatedTweet);
