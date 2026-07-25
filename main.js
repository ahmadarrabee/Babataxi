const form = document.getElementById("bookingForm");
const waNumber = "962779923740";

function buildMessage(data) {
  const parts = ["طلب حجز جديد من موقع Tawseelat Al-Baba:"];

  if (data.name) parts.push(`الاسم: ${data.name}`);
  if (data.phone) parts.push(`الهاتف: ${data.phone}`);
  parts.push(`من: ${data.from}`);
  parts.push(`إلى: ${data.to}`);
  if (data.when) parts.push(`الوقت: ${data.when}`);
  if (data.notes) parts.push(`ملاحظات: ${data.notes}`);

  return parts.join("\n");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const message = buildMessage(data);
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noreferrer");
});

const year = new Date().getFullYear();
const footer = document.querySelector(".footer p:last-of-type");
if (footer) {
  footer.textContent = `توصيل راقٍ، أمان، والتزام في كل مشوار. © ${year}`;
}
