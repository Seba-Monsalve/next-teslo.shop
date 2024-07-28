'use client'

import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
interface Props {
    quantity: number;
}

export const QtySelector = ({ quantity }: Props) => {

    const [count, setcount] = useState(quantity)
    const onQtyChange = (value: number) => {
        if (count + value < 1) return;
        setcount(prev => prev + value)
    }

    return (
        <div className="flex ">
            <button>
                <IoRemoveCircleOutline size={30} onClick={() => onQtyChange(-1)} />
            </button>
            <span className='w-20 mx-3 px-5 rounded text-center'>{count}</span>
            <button>
                <IoAddCircleOutline size={30} onClick={() => onQtyChange(1)} />
            </button>

        </div>
    )
}
