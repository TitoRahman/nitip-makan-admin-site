export function saveUserData(newUser, existingData = []) {
  const updatedData = Array.isArray(existingData) ? [...existingData, newUser] : [newUser];
  localStorage.setItem("users", JSON.stringify(updatedData));
  return updatedData;
}

export function updateUserData(index, updatedUser, existingData = []) {
  if (!Array.isArray(existingData)) return [updatedUser];
  const updatedData = [...existingData];
  updatedData[index] = updatedUser;
  localStorage.setItem("users", JSON.stringify(updatedData));
  return updatedData;
}

export function deleteUserData(index, existingData = []) {
  if (!Array.isArray(existingData)) return [];
  const updatedData = existingData.filter((_, i) => i !== index);
  localStorage.setItem("users", JSON.stringify(updatedData));
  return updatedData;
}
