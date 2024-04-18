
# WINDOWS VERSION (There's no /bin/date on Windows)
DATE_WITH_TIME = $(shell echo %date%:%time%)
# UNICODE TO UTF-32
EMOJI = $(shell [char]::ConvertFromUtf32(0x23F0))

checkpoint:
	@git add -A
	@git commit -m "$(EMOJI) checkpoint : $(DATE_WITH_TIME)"
	@git push
	@echo "checkpoint done!"