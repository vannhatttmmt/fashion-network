package application.data.service;

import application.data.model.User;

/**
 * Created by hoangmanh on 6/13/18.
 */
public interface UserService {
    public User findUserByEmail(String email);
    public void saveUser(User user);
}