import React from 'react'
import styles from './Table.module.scss'

import ReactPaginate from 'react-paginate'

export default function Table({
  // eslint-disable-next-line react/prop-types
  columns,
  // eslint-disable-next-line react/prop-types
  data,
  // eslint-disable-next-line react/prop-types
  count,
  // eslint-disable-next-line react/prop-types
  onPageChange,
  // eslint-disable-next-line react/prop-types
  renderObject,
  // eslint-disable-next-line react/prop-types
  withoutPaginate,
}) {
  const renderValue = (value, field, item) => {
    let render = value || '-'
    const renderFunction = renderObject && Object.keys(renderObject).includes(field)
    if (renderFunction) {
      render = renderObject[field](render, field, item)
    }
    return render
  }

  return (
    <div className={styles.TableContainer}>
      <div className={styles.Table}>
        <div className={styles.theader}>
          {Object.keys(columns).map((prop, i) => (
            <div className={styles.Table_header} key={i.toString()}>
              {columns[prop]}
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line react/prop-types */}
        {data && !!data.length ? (
          // eslint-disable-next-line react/prop-types
          data.map((props, id) => (
            <div className={styles.Table_row} key={id.toString()}>
              {Object.keys(columns).map((prop, i) => (
                <div className={styles.Table_small} key={i.toString()}>
                  <div className={styles.Table_cell}>{columns[prop]}</div>
                  <div className={styles.Table_cell}>
                    {props[prop] === true || props[prop] === false
                      ? props[prop] === true
                        ? 'Да'
                        : 'Нет'
                      : renderValue(props[prop], prop, props)}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className={styles.Table_row}>
            <td colSpan={columns && Object.keys(columns).length} className={styles.Table_NoData}>
              Нет данных
            </td>
          </div>
        )}
      </div>
      {!withoutPaginate && (
        <ReactPaginate
          containerClassName={styles.paginationContainer}
          previousLabel={
            <span>
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 17"
              >
                <path
                  d="M18.2 7.58H2.42l6.05-6.05A.86.86 0 008.5.36.77.77 0 007.37.33l-6.9 6.9A1.7 1.7 0 00.47 9.6l6.9 6.9a.77.77 0 001.11-.03.86.86 0 00-.03-1.18L2.4 9.24h15.82c.44 0 .79-.37.79-.83a.81.81 0 00-.8-.83z"
                  fill="#fff"
                />
              </svg>
            </span>
          }
          nextLabel={
            <span>
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
              >
                <path
                  d="M1.8 9.58h15.79l-6.05-6.05a.86.86 0 01-.03-1.17c.3-.33.8-.35 1.12-.03l6.9 6.9a1.7 1.7 0 01-.01 2.37l-6.9 6.9a.77.77 0 01-1.11-.03.86.86 0 01.03-1.18l6.07-6.05H1.79a.81.81 0 01-.79-.83c0-.46.35-.83.8-.83z"
                  fill="#fff"
                />
              </svg>
            </span>
          }
          activeClassName={styles.active}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          pageCount={count / 10}
          onPageChange={(props) => {
            onPageChange(props)
          }}
        />
      )}
    </div>
  )
}
