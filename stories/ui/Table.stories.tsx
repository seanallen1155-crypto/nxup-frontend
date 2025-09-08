export default { title: "UI/Table" };

export const Default = () => (
  <table border={1} cellPadding={8}>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1 Col 1</td>
        <td>Row 1 Col 2</td>
      </tr>
    </tbody>
  </table>
);
