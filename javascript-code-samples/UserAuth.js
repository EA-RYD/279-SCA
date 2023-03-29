// Example vulnerable code with an ambiguous conditional vulnerability

const isAuthenticated = (user) => {
    if (user && user.role === 'admin') {
      return true;
    } else if (user && user.role === 'user') {
      return false;
    }
  };
  
  const user = { role: 'user' };
  
  if (isAuthenticated(user)) {
    console.log('User is authenticated');
  } else {
    console.log('User is not authenticated');
  }
  