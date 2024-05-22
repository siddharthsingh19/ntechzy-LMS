import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  build: {
    lib: {
      entry: "src/custom.js",
      name: "MyLibrary",
    },
  },
};
