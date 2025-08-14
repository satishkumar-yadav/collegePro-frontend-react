export function validateFile(file) {
  if (!file) return "No file selected";
  if (file.size > 2 * 1024 * 1024) return "File too large (max 2MB)";
  const validTypes = ["application/pdf", "image/jpeg", "image/png"];
  if (!validTypes.includes(file.type)) return "Invalid file format";
  return "";
}
