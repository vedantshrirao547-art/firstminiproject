const STORAGE_KEY = "savedFreelancers";
const SAVED_EVENT = "savedFreelancersChanged";

export function getSavedFreelancerIds() {
  try {
    const storedIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(storedIds) ? storedIds.map(String) : [];
  } catch {
    return [];
  }
}

export function toggleSavedFreelancer(id) {
  const freelancerId = String(id);
  const currentIds = getSavedFreelancerIds();
  const savedIds = currentIds.includes(freelancerId)
    ? currentIds.filter((savedId) => savedId !== freelancerId)
    : [...currentIds, freelancerId];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  window.dispatchEvent(new Event(SAVED_EVENT));
  return savedIds;
}

export function subscribeToSavedFreelancers(callback) {
  const handleStorageChange = (event) => {
    if (event.type === SAVED_EVENT || event.key === STORAGE_KEY || event.key === null) {
      callback();
    }
  };

  window.addEventListener(SAVED_EVENT, handleStorageChange);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener(SAVED_EVENT, handleStorageChange);
    window.removeEventListener("storage", handleStorageChange);
  };
}