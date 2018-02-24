new Vue({
	el: '#app',
	data() {
		return {
			selectedType: null,
			selectedDistrict: null,
			selectedStreet: null,
			districtsList: [],
			streetsList: [],
			nasPunktList: [],
			selectedNasPunkt: null,
		}
	},
	methods: {
		isSelectedNasPunkt: function () {
			if(this.selectedType === 'spb') {
				this.streetsList = spb.districts[this.selectedDistrict].nasPunkt[this.selectedNasPunkt].streets;
			} else {
				this.streetsList = lo.districts[this.selectedDistrict].nasPunkt[this.selectedNasPunkt].streets;
			}
		},
		isSelectedType: function () {
			this.streetsList = [];
			this.nasPunktList = [];
			this.streetsList = [];
			if(this.selectedType === 'spb') {
				this.selectedDistrict = null;
				this.districtsList = spb.districts;
			} else {
				this.selectedDistrict = null;
				this.districtsList = lo.districts;
			}
		},
		selectDistrict: function () {
			this.streetsList = [];
			this.nasPunktList = [];
			this.streetsList = [];
			if(this.selectedType === 'spb') {
				if(spb.districts[this.selectedDistrict].nasPunkt === undefined) {
					this.streetsList = spb.districts[this.selectedDistrict].streets;
				} else {
					this.nasPunktList = spb.districts[this.selectedDistrict].nasPunkt;
			        this.streets = [];
			    }
			} else {
				if(lo.districts[this.selectedDistrict].nasPunkt === undefined) {
					this.streetsList = lo.districts[this.selectedDistrict].streets;
				} else {
					this.nasPunktList = lo.districts[this.selectedDistrict].nasPunkt;
			        this.streets = [];
			    }
			}	
		}
	}
})