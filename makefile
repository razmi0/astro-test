DATE_WITH_TIME = $(shell echo %date%:%time%)
EMOJI = $(shell echo "⏰")

checkpoint:
	@git add -A
	@git commit -m "$(EMOJI) checkpoint : $(DATE_WITH_TIME)"
	@git push
	@echo "checkpoint done!"