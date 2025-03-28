// create a type that INFERS type of props that is returned from getServerSideProps.

const getServerSideProps = async () => {
    const res = await fetch("some-url");
    const json: { title: string } = await res.json();
    return {
        props: { json }
    }
}

type InferProps<T extends (...args: unknown[]) => unknown> = Awaited<ReturnType<T>> extends { props: infer P } ? P : never;

type PropsType = InferProps<typeof getServerSideProps>
/**
 json: {
        title: string;
    }
 */