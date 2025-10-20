/*
  Add behavior: toggle the summary label between "Show abstract" and
  "Hide abstract" whenever a details element opens or closes.
*/
function changeAbstractText() {
  const detailsList = document.querySelectorAll('details');

  if (!detailsList.length) return;

  detailsList.forEach((details) => {
    const summary = details.querySelector('summary.show-abstract');
    if (!summary) return;

    const updateLabel = () => {
      summary.textContent = details.open ? 'Hide abstract' : 'Show abstract';
    };

    details.addEventListener('toggle', updateLabel);

    updateLabel();
  });
}

document.addEventListener('DOMContentLoaded', changeAbstractText);
