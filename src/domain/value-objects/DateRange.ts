class DateRange {
  private readonly _startDate: Date;
  private readonly _endDate: Date | null;

  constructor(startDate: Date, endDate: Date | null = null) {
    if (endDate && startDate > endDate) {
      throw new Error('Start date cannot be after end date');
    }
    
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date | null {
    return this._endDate;
  }

  get isCurrentPosition(): boolean {
    return this._endDate === null;
  }

  get durationInMonths(): number {
    const end = this._endDate || new Date();
    const months = (end.getFullYear() - this._startDate.getFullYear()) * 12 +
                  (end.getMonth() - this._startDate.getMonth());
    return months;
  }

  get durationInYears(): number {
    return this.durationInMonths / 12;
  }

  get formattedDuration(): string {
    const months = this.durationInMonths;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
    
    if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    }
    
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  }

  get formattedDateRange(): string {
    const startFormatted = this._startDate.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
    
    if (!this._endDate) {
      return `${startFormatted} - Present`;
    }
    
    const endFormatted = this._endDate.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
    
    return `${startFormatted} - ${endFormatted}`;
  }
}

export { DateRange }; 