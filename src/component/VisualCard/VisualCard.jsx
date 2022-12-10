import React from 'react';
import './styles.css';

export function VisualCard({
  valid,
  valid_percent,
  mismatched,
  mismatched_percent,
  missing,
  missing_percent,
  unique,
  most_common,
  most_common_percent,
}) {
  return (
    <div className="visual-card">
      <div className="visual-card-item">
        <div className="item-front">
          <div className="item-name">
            Valid <div className="item-square green-bg"></div>
          </div>
          <div className="item-count">{valid}</div>
        </div>
        <div className="item-last grey">{valid_percent}%</div>
      </div>
      <div className="visual-card-item">
        <div className="item-front">
          <div className="item-name">
            Mismatched <div className="item-square orange-bg"></div>
          </div>
          <div className="item-count">{mismatched}</div>
        </div>
        <div className="item-last grey">{mismatched_percent}%</div>
      </div>
      <div className="visual-card-item">
        <div className="item-front">
          <div className="item-name">
            Missing <div className="item-square red-bg"></div>
          </div>
          <div className="item-count">{missing}</div>
        </div>
        <div className="item-last grey">{missing_percent}%</div>
      </div>
      <div className="visual-card-item mt-10">
        <div className="item-front">
          <div className="item-name">Unique</div>
          <div className="item-count">{unique}</div>
        </div>
        <div className="item-last grey"></div>
      </div>
      <div className="visual-card-item">
        <div className="item-front">
          <div className="item-name">Most Common</div>
          <div className="item-count">{most_common}</div>
        </div>
        <div className="item-last grey">{most_common_percent}%</div>
      </div>
    </div>
  );
}
