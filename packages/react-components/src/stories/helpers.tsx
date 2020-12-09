export function setCssVariables(mode: "light" | "dark") {
  let data = {
    "--background-body": "#151414",
    "--background": "#2b2b2b",
    "--background-alt": "#1a242f",
    "--selection": "#1c76c5",
    "--text-main": "#dbdbdb",
    "--text-bright": "#fff",
    "--text-muted": "#a9b1ba",
    "--links": "#41adff",
    "--focus": "#0096bfab",
    "--border": "#526980",
    "--code": "#ffbe85",
    "--animation-duration": "0.1s",
    "--button-hover": "#324759",
    "--scrollbar-thumb": "var(--button-hover)",
    "--scrollbar-thumb-hover": "rgb(20, 20, 20)",
    "--form-placeholder": "#a9a9a9",
    "--form-text": "#fff",
    "--variable": "#d941e2",
    "--highlight": "#efdb43",
  };

  if (mode === "light") {
    data = {
      "--background-body": "#fff",
      "--background": "#efefef",
      "--background-alt": "#f7f7f7",
      "--selection": "#9e9e9e",
      "--text-main": "#363636",
      "--text-bright": "#000",
      "--text-muted": "#70777f",
      "--links": "#0076d1",
      "--focus": "#0096bfab",
      "--border": "#dbdbdb",
      "--code": "#000",
      "--animation-duration": "0.1s",
      "--button-hover": "#ddd",
      "--scrollbar-thumb": "rgb(213, 213, 213)",
      "--scrollbar-thumb-hover": "rgb(196, 196, 196)",
      "--form-placeholder": "#949494",
      "--form-text": "#000",
      "--variable": "#39a33c",
      "--highlight": "#ff0",
    };
  }

  const dataEntries = Object.entries(data);
  for (const [key, value] of dataEntries) {
    document.body.style.setProperty(key, value);
  }
}
