tymix is all about describing a UNIX machine time, in human language words.
tymix supports different levels of granularity, from vague and general to percise one (see examples below).


How to use tymix?

First, include the JS files under your application:
<script type="text/javascript" src="tymix.js"></script>

Then, init tymix. You can configure some propeties:
var tymix = new Tymix({
	level: "low"
});

Finally, when you want to describe a timestamp using tymix, do it simply like that:
tymix.describe(unixTime);

Enjoy!


ON NEXT VERSIONS:
- Support i18n
- Auto refresh of the description

