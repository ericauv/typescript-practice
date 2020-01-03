interface RectangleOptions {
  width: number;
  length: number;
  height?: number; // optional parameters have ? appended to parameter name
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
  if (options.height) {
    let height = options.height;
  }
  // Draw logic
}
drawRectangle({
  width: 50,
  length: 40
});
