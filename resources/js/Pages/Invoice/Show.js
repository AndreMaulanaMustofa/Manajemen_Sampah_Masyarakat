import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import { Inertia } from '@inertiajs/inertia'

export default function Show({ auth, invoice }) {
    Echo.private(`invoice.paid.${auth.user.id}`).listen(
        'InvoicePaid',
        ({ invoice }) => {
            if (invoice.status == 'settlement') {
                Inertia.get('/products/me')
            }
        }
    );
    return (
        <div>
            <Head title={`Your order - ${invoice.order_id}`} />
            <Container>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        {invoice.qr_code ? (
                            <img
                                className="border shadow-sm rounded-lg"
                                src={invoice.qr_code}
                                alt=""
                            />
                        ) : null}
                        {invoice.bank ? (
                            <div>
                                <div className="p-2 rounded-lg text-blue-900 bg-gradient-to-r from-blue-200 via-transparent to-transparent">
                                    <div>
                                        <strong className="font-semibold uppercase">
                                            {invoice.bank.name}
                                        </strong>{' '}
                                        Virtual Account Number
                                    </div>
                                    <div>{invoice.bank.va_number}</div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <div className="prose">
                            <h3>Instruction</h3>
                            <p>
                                Please follow the instruction below if you don't
                                understand how to pay!
                            </p>
                            <ol>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Ut similique suscipit nam dolore!</li>
                                <li>Est facilis mollitia velit dolores.</li>
                                <li>Facere omnis obcaecati iste a!</li>
                                <li>Animi natus asperiores iure dicta.</li>
                                <li>Optio expedita porro ut ullam!</li>
                                <li>
                                    Perspiciatis, soluta. Animi, corporis
                                    corrupti!
                                </li>
                                <li>
                                    Blanditiis quisquam necessitatibus labore
                                    ab?
                                </li>
                                <li>
                                    Mollitia sapiente aut libero exercitationem.
                                </li>
                                <li>
                                    Repellat rem eligendi adipisci consectetur.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
