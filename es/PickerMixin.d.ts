/// <reference types="react" />
import React from 'react';
import { IPickerProps } from './PickerTypes';
export default function (ComposedComponent: any): {
    new (props: IPickerProps, context?: any): {
        select: (value: any, itemHeight: any, scrollTo: any) => void;
        selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
        computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
        doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
        render(): JSX.Element;
        setState<K extends string>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<IPickerProps>;
        state: Readonly<any>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    Item: (_props: {
        className?: string | undefined;
        value: any;
    }) => null;
};
