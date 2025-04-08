import User, { IUser } from '../models/user';
import bcrypt from 'bcryptjs';
import logger from '../utils/logger';


export const createUser = async (userData: IUser) => {
    logger.info('createUser called with userData:', userData);
    try {
      logger.debug('Hashing user password.');
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      logger.debug('Password hashed successfully.');
      const user = new User({ ...userData, password: hashedPassword });
      logger.debug('Creating new user document.');
      const savedUser = await user.save();
      logger.info('User created successfully with ID:', savedUser._id);
      return savedUser;
    } catch (error) {
      logger.error('Error occurred during user creation:', error);
      if (error instanceof Error) {
        throw new Error(`Error creating user: ${error.message}`);
      } else {
        throw new Error('Error creating user: Unknown error');
      }
    }
  };

export const getUserById = async (userId: string) => {
    try {
        return await User.findById(userId).exec();
    } catch (error) {
        if (error instanceof Error) {
        throw new Error(`Error fetching user: ${error.message}`);
        } else {
        throw new Error('Error fetching user: Unknown error');
        }
    }
    }

export const getAllUsers = async () => {
    try {
        return await User.find().exec();
    } catch (error) {
        if (error instanceof Error) {
        throw new Error(`Error fetching users: ${error.message}`);
        } else {
        throw new Error('Error fetching users: Unknown error');
        }
    }
    }

export const updateUser = async (userId: string, userData: Partial<IUser>) => {
    try {
        return await User.findByIdAndUpdate(userId, userData, { new: true }).exec();
    } catch (error) {
        if (error instanceof Error) {
        throw new Error(`Error updating user: ${error.message}`);
        } else {
        throw new Error('Error updating user: Unknown error');
        }
    }
    }

export const deleteUser = async (userId: string) => {
    try {
        return await User.findByIdAndDelete(userId).exec();
    } catch (error) {
        if (error instanceof Error) {
        throw new Error(`Error deleting user: ${error.message}`);
        } else {
        throw new Error('Error deleting user: Unknown error');
        }
    }
    }

export const findUserByEmail = async (email: string) => {
    try {
        return await User.findOne({ email }).exec();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by email: ${error.message}`);
        } else {
            throw new Error('Error fetching user by email: Unknown error');
        }
    }
}
export const findUserByName = async (name: string) => {
    try {
        return await User.findOne({ name }).exec();
    } 
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching user by name: ${error.message}`);
        } else {
            throw new Error('Error fetching user by name: Unknown error');
        }
    }
}


export const loginUser = async (email: string, password: string) => {
    logger.info('loginUser called with email:', email);
    try {
      logger.debug('Searching for user by email:', email);
      const user = await User.findOne({ email }).exec();
      if (!user) {
        logger.warn('User not found for email:', email);
        throw new Error('User not found');
      }
      logger.debug('User found for email:', email, 'User ID:', user._id);
  
      logger.debug('Comparing provided password with stored hash.');
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        logger.warn('Invalid password provided for user:', email, 'User ID:', user._id);
        throw new Error('Invalid password');
      }
      logger.info('User logged in successfully:', email, 'User ID:', user._id);
      return user;
    } catch (error) {
      logger.error('Error occurred during user login:', error);
      if (error instanceof Error) {
        throw new Error(`Error logging in user: ${error.message}`);
      } else {
        throw new Error('Error logging in user: Unknown error');
      }
    }
  };

export const userService = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
    findUserByEmail,
    findUserByName,
    loginUser
};

export default userService;