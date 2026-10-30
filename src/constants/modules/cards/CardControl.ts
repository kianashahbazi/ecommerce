export const cardControlStyles = {
    selected:{
        light:'has-[:checked]:border-primary',
        dark:'has-[:checked]:border-white',
    },
    content: 'flex min-w-0 flex-1 items-start gap-3',
    icon: 'mt-0.5 flex shrink-0 items-center justify-center',
    text: 'flex min-w-0 flex-col',

    label:{
        light:'text-black',
        dark:'text-white',
    },
    description:{
        base:'mt-1',
        theme:{
            light:'text-neutral',
            dark:'text-neutral-light',
        },
    },
}