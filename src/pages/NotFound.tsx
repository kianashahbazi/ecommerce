import { PageContainer , PageSurface , PageLayout } from "../components";

function NotFound(){
    return(
        <PageSurface>
            <PageLayout variant='centered'>
                <PageContainer>
                    <main className="p-8">
                        <h1>404 Not Found</h1>
                    </main>
                </PageContainer>
            </PageLayout>
        </PageSurface>
    );
}
export{NotFound};