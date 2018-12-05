import { v4 } from 'uuid';

class PostClass {
  constructor(title, content, user, timestamp) {
    this.id = v4();
    this.title = title;
    this.content = content;
    this.user = user;
    this.timestamp = timestamp;
    this.upVote = 0;
  }
}

export default PostClass;