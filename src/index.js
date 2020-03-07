import VCalendar from 'v-calendar';
import './styles.css'

Vue.use(VCalendar);

new Vue({
	el: '#booking-picker',
	data: () => {
		return {
			availableHosts: 9,
			selectedHosts: 1,
			startDate: new Date(),
			endDate: null,
			haveError: false
		}
	},
	computed: {
		formatStart() {
			return moment(this.startDate).format('YYYY-MM-DD')
		},
		checkoutDate() {
			return moment(this.startDate).add(1, 'days').toDate();
		},
		formatEnd() {
			return this.endDate ? moment(this.endDate).format('YYYY-MM-DD') : null
		},
	},
	methods: {
		sendBooking(e) {
			this.haveError = false;

			if(this.startDate === null || this.endDate === null) {
				this.haveError = true;
				e.preventDefault();
			}
		},
		checkDates() {
			if(moment(this.startDate) < moment(this.endDate)) {
				this.endDate = null;
			}
		}
	}
})