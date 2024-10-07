export async function fetchDetailData() {
  const fetchData = await fetch("/api/event");
  const response = await fetchData.json();

  return response;
}
