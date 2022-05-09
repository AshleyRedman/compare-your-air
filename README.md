![Google Lighthouse](https://github.com/AshleyRedman/compare-your-air/actions/workflows/lighthouse.yml/badge.svg)
![ESlint](https://github.com/AshleyRedman/compare-your-air/actions/workflows/eslint.yml/badge.svg)
![Prettier](https://github.com/AshleyRedman/compare-your-air/actions/workflows/prettier.yml/badge.svg)

# Compare your Air

### Things to note...

-   api doesn't have a fuzzy search or part query search, only full text search
-   api only finds results in the correct case, this ideally would be normalized on the api side, but instead as a cheap fix, i'm uppercasing the first letter of the query, but this does not always work. https://docs.openaq.org/#/v2/cities_get_v2_cities_get
-   Design shows the autocomplete dropdown as relative, i.e pushed the grid items down. This causes some bad layout shift. I have stuck to the brief but generally I would push back and show what it would look like if it were absolute, i.e ontop of the grid items, no layout shift etc...

---
