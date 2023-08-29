export function formatDate(inputDate: string): string {
  const parts = inputDate.split("/");
  if (parts.length !== 3) {
    throw new Error("Formato de data inválido. Use 'aaaa/mm/dd'.");
  }

  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  return `${day}/${month}/${year}`;
}