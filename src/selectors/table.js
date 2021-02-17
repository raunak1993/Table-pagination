import { createSelector } from "reselect"

const getPageData = (state) => state.pageData

export const getTableData = createSelector(getPageData, (pageData) => {
  const tableData = []
  tableData.push([
    "Id",
    "Album Id",
    "Title",
    "Url",
    "Thumbnail Url"
  ])

  pageData.forEach((row) => {

    const currentRow = [
      row.id,
      row.albumId,
      row.title,
      row.url,
      row.thumbnailUrl
    ]
    tableData.push(currentRow)
  })

  return tableData
})
