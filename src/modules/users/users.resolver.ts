import { Resolver, Query, ResolveProperty } from '@nestjs/graphql';
import { users, posts } from '../../data/sampledata';
import { find } from 'lodash';

@Resolver('User')
export class UserResolver {
  @Query()
  getUsers(obj, args, context, info) {
    return users;
  }

  @Query('user')
  getUserById(obj, args, context, info) {
    const { id } = args;
    return users.find(x => x.id === id);
  }

  @ResolveProperty('friends')
  getUserFriends(user, args, context, info) {
    return users.filter(x => user.friends.includes(x.id));
  }

  @ResolveProperty('posts')
  getUserPosts(user, args, context, info) {
    return posts.filter(x => x.userId === user.id);
  }
}