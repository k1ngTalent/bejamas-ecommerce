import React from 'react';
import styles from './FilterList.module.scss';
import { Filter } from '../../interfaces';

type ListProps = {
    filters:Filter[],
    filterListTitle:string,
    filterName:string,
    multi:boolean
    cb:(V:any)=>void
    values:any[]
} 

type InputProps = {
    filter:Filter,
    filterName:string,
    index:number,
    multi:boolean,
    cb:(V:any)=>void,
    checked:boolean
} 

const FilterList = ({ filters, filterListTitle, filterName, multi = false, cb, values }: ListProps) => {
    return (
        <div className={styles.filterlist}>
            <div className={styles.filterlist__title}>{filterListTitle}</div>
            {filters.map((filter: Filter, index: number) => {
                let found = values.find((value: any) => (JSON.stringify(value) === JSON.stringify(filter.value)));
                let checked = false;
                if (found) checked = true;
                return (
                    <div key={index}>
                        <FilterInput key={index} filter={filter} checked={checked} filterName={filterName} index={index} cb={cb} multi={multi} />
                    </div>
                )
            })}

        </div>
    )
}

const FilterInput = ({ filterName, index, cb, filter, multi, checked }: InputProps) => (
    <div className={styles.filterinput__container}>
        <input type={multi ? "checkbox" : "radio"} name={filterName}
            id={filterName + index}
            value={filter.value}
            checked={checked}
            onChange={() => cb(filter.value)}
        />
        <label htmlFor={filterName + index} className={styles.filterinput__label}>{filter.label}</label>
    </div>
)


export default FilterList;