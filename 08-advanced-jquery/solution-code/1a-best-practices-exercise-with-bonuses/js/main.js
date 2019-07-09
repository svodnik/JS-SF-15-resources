/* 

Improving a favorites list

*/
$(() => {
  const $thingList = $('#fav-list');
  const $things = $('.fav-thing');
  const $button = $('#new-thing-button');
  const $newThingInput = $('#new-thing');

  const addToList = ($list, thing) => {
    // 1. Comment out the following three lines of code, then below them
    //    write a single statement to replace them, using chaining.
    // Start of code to replace
    //  const $thingLi = $('<li>');
    //  $thingLi.html(thing);
    //  $thingLi.addClass('fav-thing');
    // End of code to replace

    // Add refactored statement here:
    const $thingLi = $('<li>')
      .html(thing)
      .addClass('fav-thing list-group-item');

    addCrossOffLink($thingLi);
    $list.append($thingLi);
  }

  const addCrossOffLink = ($li) => {
    // 2. Comment out the following three lines of code, then below them
    //    write a single statement to replace them, using chaining.
    // Start of code to replace
    //  const $crossOffLink = $('<span>');
    //  $crossOffLink.html(' cross off');
    //  $crossOffLink.addClass('cross-off');
    // End of code to replace

    // Add refactored statement here:
    const $crossOffLink = $('<span>')
      .html(' cross off')
      .addClass('cross-off');

    // 3. Comment out the following three lines of code, then below them
    //    write a single statement to replace them, using implicit iteration.
    // Start of code to replace
    // $li.each(() => {
    //   $(this).append($crossOffLink);
    // });
    // End of code to replace

    // Add refactored statement here:
    $li.append($crossOffLink);
  }

  $things.toArray().forEach((li) => {
    addCrossOffLink($(li));
  });

  $button.on('click', (event) => {
    event.preventDefault();
    const newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });

  // 4. Update the event listener code below to use event delegation.
  //    - Change the selector to set the on event on the unordered list, rather
  //      than on the list items themselves.
  //    - Specify the child elements with the class value of cross-off as the
  //      elements to which the event is delegated.

  // Start of code to update
  //  $crossOffLink.on('click', (event) => {
  $thingList.on('click', '.cross-off', (event) => {
    // updated
    $(this)
      .parent()
      .addClass('crossed-off');
    $(this).html('');
  });
  // End of code to update

  // BONUS 1: When the user mouses over each item, the item should turn grey.
  //          Don't use the CSS :hover pseudo-class for this.

  // BONUS 2: Add another link after each item that allows you to delete the item.

  // Bonus 2 -- could also be further refactored by combining with preceding event listener
  $thingList.on('click', '.fav-thing .delete', () => {
    const $thingItem = $(this).parent();
    $thingItem.addClass('deleted');
  });

  // Bonus 1
  $thingList.on('mouseenter mouseleave', 'li', (event) => {
    if (event.type === 'mouseenter') {
      $(this).removeClass('inactive');
      $(this)
        .siblings()
        .addClass('inactive');
    } else if (event.type === 'mouseleave') {
      $(this)
        .siblings()
        .removeClass('inactive');
    }
  });
});
