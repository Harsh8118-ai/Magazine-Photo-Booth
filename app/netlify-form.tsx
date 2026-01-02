export default function NetlifyHiddenForm() {
    return (
        <form
            name="availability-check"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            hidden
        >
            <input type="hidden" name="form-name" value="availability-check" />
            <input name="bot-field" />
            <input type="date" name="event_date" />
            <input type="text" name="city" />
            <input type="tel" name="phone" />
        </form>
    )
}
