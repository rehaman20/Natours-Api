class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //1) Build query
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    //2) Advanced filtering
    const queryStr = JSON.stringify(queryObj);
    //replace all gte, lte, gt, lt with $gte, $lte, $gt, $lt
    const queryStrReplaced = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      match => `$${match}`
    );
    const queryObjReplaced = JSON.parse(queryStrReplaced);
    this.query.find(queryObjReplaced);
    return this;
  }

  sort() {
    //3) Sorting queryObjReplaced
    let sortBy = this.queryString.sort ? this.queryString.sort : '-createdAt';
    if (this.queryString.sort) {
      sortBy = sortBy.split(',').join(' ');
      this.query.sort(sortBy);
    } else {
      this.query.sort(sortBy);
    }
    return this;
  }

  limitFields() {
    //4) Field limiting
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query.select(`${fields} -_id`);
    } else {
      this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    //5) Pagination
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
