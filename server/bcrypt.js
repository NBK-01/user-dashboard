const verifyPassword = async (password, hash) => {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (error) {
    throw new Error('Error verifying password');
  }
};


