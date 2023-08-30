import { TFormData } from '@/types';

export function sendEmail(data: TFormData) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        body: JSON.stringify(data),
        method: 'POST',
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}
