class PaginationParam {
  constructor(currentPage, pageCount, dish) {
    this.currentPage = currentPage;
    this.pageCount = pageCount;
    this.dish = dish;
    this.lastIndexElement = this.lastIndexElement();
    this.firstIndexElement = this.firstIndexElement();
    this.newDishArray = this.newDishArray();
    this.countPoint = this.countPoint();
  }

  lastIndexElement() {
    return this.currentPage * this.pageCount;
  }

  firstIndexElement() {
    return this.lastIndexElement - this.pageCount;
  }

  newDishArray() {
    return this.dish.slice(this.firstIndexElement, this.lastIndexElement);
  }

  countPoint() {
    return Math.ceil(this.dish.length / this.pageCount);
  }
}

export default PaginationParam;
