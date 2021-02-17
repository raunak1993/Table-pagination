import React from 'react';
import { connect } from "react-redux";
import { FixedSizeGrid } from "react-window"

import { getTableData } from '../selectors/table'

import styles from "./Table.module.css";

const Table = ({ data }) => {
    let width = window.innerWidth
    if (window.innerWidth <= 768) {
        width = 80 / 100 * width
    } else if (window.innerWidth > 768 && window.innerWidth < 1440) {
        width = 60 / 100 * width
    } else {
        width = 75 / 100 * width
    }

    return (
        <div className={styles.table_container}>
            {/* <FixedSizeGrid
                className={styles.table}
                itemData={data}
                rowCount={data.length}
                columnCount={5}
                rowHeight={50}
                columnWidth={230}
                height={320}
                width={width}
            >
                {Cell}
            </FixedSizeGrid> */}
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        data: getTableData(state),
    }
}

export default connect(mapStateToProps, null)(Table)
