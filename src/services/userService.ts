import User, { IUser } from '../models/user';


export const createUser = async (userData: IUser) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
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
