$(document).ready(function () {
  const $tableBody = $("#pokemon-table-body");

  for (let i = 1; i <= 168; i++) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${i}`, function (data) {
      const id = data.id;
      const name = data.name;
      const sprite = data.sprites.front_default;
      const height = data.height / 10; // metros
      const weight = data.weight / 10; // kg
      const species = data.species.name;

      const row = `
        <tr>
          <td>#${id}</td>
          <td>${name}</td>
          <td><img src="${sprite}" alt="${name}" class="img-fluid" width="70"></td>
          <td>${height.toFixed(1)} m</td>
          <td>${weight.toFixed(1)} kg</td>
          <td>${species}</td>
        </tr>
      `;

      $tableBody.append(row);
    });
  }
});
