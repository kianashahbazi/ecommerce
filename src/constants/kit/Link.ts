export const linkStyles = {
    base : 'inline-flex items-center gap-1 transition-colors duration-200',
    sizes :{
        sm:'text-xs leading-[1.5]',
        base:'text-sm leading-[1.5]',
        lg:'text-base leading-[1.5]',
    },
    weights:{
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
    },
    theme:{
        light: 'text-primary hover:text-primary-hover',
        dark: 'text-neutral-light hover:text-white',
    },

    underline: {
        always: 'underline underline-offset-4',
        hover: 'hover:underline',
    },
}