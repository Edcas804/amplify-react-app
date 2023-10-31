/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PhotoshootUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    status?: number;
};
export declare type PhotoshootUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    status?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhotoshootUpdateFormOverridesProps = {
    PhotoshootUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PhotoshootUpdateFormProps = React.PropsWithChildren<{
    overrides?: PhotoshootUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    photoshoot?: any;
    onSubmit?: (fields: PhotoshootUpdateFormInputValues) => PhotoshootUpdateFormInputValues;
    onSuccess?: (fields: PhotoshootUpdateFormInputValues) => void;
    onError?: (fields: PhotoshootUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhotoshootUpdateFormInputValues) => PhotoshootUpdateFormInputValues;
    onValidate?: PhotoshootUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PhotoshootUpdateForm(props: PhotoshootUpdateFormProps): React.ReactElement;
