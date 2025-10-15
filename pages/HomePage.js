export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = '#search_query_top';
    this.searchButton = '#searchbox button[name="submit_search"]';
    this.searchResults = '#center_column';
  }

  async navigate() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async searchFor(term) {
    await this.page.fill(this.searchInput, term);
    await this.page.click(this.searchButton);
  }

  async verifyProductInResults(productName) {
    return this.page.locator(this.searchResults).getByText(productName);
  }
}