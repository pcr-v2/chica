export async function checkNetwork(timeout = 10000): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const res = await fetch("/api/healthcheck", {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return res.ok;
  } catch {
    return false;
  }
}
