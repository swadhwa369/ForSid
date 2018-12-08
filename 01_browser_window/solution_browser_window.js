

function BrowserWindow (accountName, windowName, tabs) {
  this.accountName = accountName;
  this.windowName = windowName;
  this.tabs = tabs;
}

/* COMMENTS:
  Your constructor is perfect, but here is also how you set up a default parameter, if for some reason, tabs is undefined
  function BrowserWindow (accountName, windowName, tabs = [{tabURL: 'defaultHomePage.com}]) {

  For the joinWindows prototype method, you want to add the secondWindow's tabs (as defined in your constructor) and merge them with your existing tabs.
  'this' references the window instance you're joining the new tabs with. In this solution, they use the spread operator  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  but you could also your Array.concat to join two arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

    BrowserWindow.prototype.joinWindows = function(secondWindow) {
      this.tabs = [...this.tabs, ...secondWindow.tabs]; // <-- This joins both arrays into one !
    };

  For the newTab prototype method, you want to create a new "window", which is an object with { tabURL: url }, and join it with the other "tabs".

    BrowserWindow.prototype.newTab = function(tabURL) {
      const tab = { tabURL };
      this.tabs.push(tab);
    };

   For closeTab, the solution is a bit more complicated. In your solution, pop() wouldn't work, because pop only removes the last element in an array.
   You want to pinpoint the index that you want to remove, in the first solution, they use slice(0, index) to capture all elements up until the array, then
   grab use slice(index + 1), to grab all elements after that index. Then they join them together. Then the two arrays are joined, and if it is empty, it passes the homepage tab in.

  BrowserWindow.prototype.closeTab = function(index) {
    const tabsUpToIndex = [this.tabs.slice(0, index)];
    const tabsAfterIndex = [this.tabs.slice(index+1)];

    this.tabs = [...tabsUpToIndex, ...tabsAfterIndex]

    if (this.tabs.length === 0) {
      this.tabs.push({ tabURL: 'defaultHomePage.com' });
    }

  };

  This can also be more simply accomplished with the Array.prototype.splice method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

    BrowserWindow.prototype.closeTab = function(num) {
      this.tabs.splice(num, 1);
      if (this.tabs.length < 1) this.tabs =[{ tabURL: 'defaultHomePage.com' }];
    };

 */
