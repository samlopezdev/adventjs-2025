// Drawing Tables

// ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on a gift and children management application.

// To improve the presentation, he wants to create a drawTable function that receives an array of objects and turns it into a text table.

// The drawn table must have:

// A header with column letters (A, B, C…).
// The content of the table is the values of the objects.
// The values must be left-aligned.
// The fields always leave one space on the left.
// The fields leave on the right the space needed to align the box.
// The function receives a second parameter sortBy that indicates the name of the field by which the rows must be sorted. The order will be ascending alphabetical if the values are strings and ascending numeric if they are numbers.

// Check the example to see how you should draw the table:

// drawTable(
//   [
//     { name: 'Charlie', city: 'New York' },
//     { name: 'Alice', city: 'London' },
//     { name: 'Bob', city: 'Paris' }
//   ],
//   'name'
// )
// // +---------+----------+
// // | A       | B        |
// // +---------+----------+
// // | Alice   | London   |
// // | Bob     | Paris    |
// // | Charlie | New York |
// // +---------+----------+

// drawTable(
//   [
//     { gift: 'Book', quantity: 5 },
//     { gift: 'Music CD', quantity: 1 },
//     { gift: 'Doll', quantity: 10 }
//   ],
//   'quantity'
// )
// // +----------+----+
// // | A        | B  |
// // +----------+----+
// // | Music CD | 1  |
// // | Book     | 5  |
// // | Doll     | 10 |
// // +----------+----+


function drawTable(data, sortBy) {
  if (data.length === 0) return "";

  // Determine columns (keys in order of first row)
  let keys = Object.keys(data[0]);
  let columns = keys.map(function (_, i) {
    return String.fromCharCode(65 + i); // A, B, C...
  });

  // Sort rows
  let firstValue = data[0][sortBy];
  let isNumeric = typeof firstValue === "number";

  data.sort(function (a, b) {
    let valA = a[sortBy];
    let valB = b[sortBy];
    if (isNumeric) return Number(valA) - Number(valB);
    return String(valA).localeCompare(String(valB));
  });

  // Determine column widths
  let colWidths = keys.map(function (key, i) {
    let headerWidth = columns[i].length;
    let maxContentWidth = Math.max(
      headerWidth,
      Math.max.apply(
        null,
        data.map(function (r) {
          return String(r[key]).length;
        })
      )
    );
    return maxContentWidth;
  });

  // Helper to pad a string to left-align with spaces
  function pad(str, width) {
    return " " + str + " ".repeat(width - str.length) + " ";
  }

  // Draw border line
  let borderLine =
    "+" +
    colWidths
      .map(function (w) {
        return "-".repeat(w + 2);
      })
      .join("+") +
    "+";

  // Draw header
  let headerLine =
    "|" +
    columns
      .map(function (c, i) {
        return pad(c, colWidths[i]);
      })
      .join("|") +
    "|";

  // Draw rows
  let rowLines = data.map(function (row) {
    return (
      "|" +
      keys
        .map(function (key, i) {
          return pad(String(row[key]), colWidths[i]);
        })
        .join("|") +
      "|"
    );
  });

  // Combine all lines
  return [borderLine, headerLine, borderLine]
    .concat(rowLines, [borderLine])
    .join("\n");
}