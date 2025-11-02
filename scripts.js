function updateRocketPosition() {
  const rocket = document.getElementById("rocket");
  const container = document.getElementById("scroll-rocket-container");
  const revealRect = document.getElementById("rocketRevealRect");
  if (!rocket || !container || !revealRect) return;

  const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const scrollPercent = Math.min(Math.max(window.scrollY / docHeight, 0), 1);

  const containerHeight = container.clientHeight;
  const rocketHeight = rocket.clientHeight || 40;
  const maxY = Math.max(containerHeight - rocketHeight, 0);

  const rocketY = (1 - scrollPercent) * maxY;
  rocket.style.transform = `translateY(${rocketY}px)`;

  const totalPathHeight = 1200;
  const revealY = totalPathHeight * (1 - scrollPercent);
  revealRect.setAttribute("y", revealY);
}
document.addEventListener("scroll", updateRocketPosition);
window.addEventListener("resize", updateRocketPosition);
window.addEventListener("load", updateRocketPosition);