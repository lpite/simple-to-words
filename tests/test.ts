import tap from "tap"
import convertToWords from "../index"
tap.test("to words", t => {
	t.plan(10);
	t.test("1", t => {
		t.plan(1);
		t.equal(convertToWords(1), "одна гривня 0 копійок");
	})
	t.test("1.5", t => {
		t.plan(1);
		t.equal(convertToWords(1.5), "одна гривня 50 копійок");
	})
	t.test("12", t => {
		t.plan(1);

		t.equal(convertToWords(12), "дванадцять гривень 0 копійок");
	})
	t.test("12.5", t => {
		t.plan(1);

		t.equal(convertToWords(12.5), "дванадцять гривень 50 копійок");
	})
	t.test("123", t => {
		t.plan(1);

		t.equal(convertToWords(123), "сто двадцять три гривні 0 копійок");
	})
	t.test("123.5", t => {
		t.plan(1);

		t.equal(convertToWords(123.5), "сто двадцять три гривні 50 копійок");
	})
	t.test("1234", t => {
		t.plan(1);

		t.equal(convertToWords(1234), "одна тисяча двісті тридцять чотири гривні 0 копійок");
	})
	t.test("1234.5", t => {
		t.plan(1);

		t.equal(convertToWords(1234.5), "одна тисяча двісті тридцять чотири гривні 50 копійок");
	})
	t.test("12345", t => {
		t.plan(1);

		t.equal(convertToWords(12345), "дванадцять тисяч триста сорок п'ять гривень 0 копійок");
	})
	t.test("12345.5", t => {
		t.plan(1);

		t.equal(convertToWords(12345.5), "дванадцять тисяч триста сорок п'ять гривень 50 копійок");
	})

})

